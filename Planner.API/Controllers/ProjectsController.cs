using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Planner.API.Data;
using System;
using System.Collections.Generic;
using Planner.API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using System.Data.Entity;

namespace Planner.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ISchismRepository _repo;

        public ProjectsController(DataContext context, ISchismRepository repo)
        {
            _repo = repo;
            _context = context;
        }

        [HttpGet("get")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProjects()
        {
            int userId = 1;

            User user = await _context.Users.FirstAsync(x => x.Id == userId);

            Console.WriteLine(user.Username);
            return Ok();
        }

        [HttpPost("post")]
        public async Task<IActionResult> CreateProject(int userId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            return null;
        }
    }
}