using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Planner.API.Data;
using Planner.API.Dto;
using Planner.API.Model;

namespace Planner.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegistrationUser registrationUser)
        {
            registrationUser.Username = registrationUser.Username.ToLower();

            if (await _repo.UserExists(registrationUser.Username))
                return BadRequest("Username already exists.");

            User userToCreate = new User
            {
                Username = registrationUser.Username
            };

            User user = await _repo.Register(userToCreate, registrationUser.Password);

            return Ok();

        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login(LoginUser loginUser)
        {
            User userFromRepo = await _repo.Login(loginUser.Username.ToLower(), loginUser.Password);

            if (userFromRepo == null)
                return Unauthorized();
            
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _config.GetSection("AppSettings:Token").Value));
        
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });




        }

    }
}