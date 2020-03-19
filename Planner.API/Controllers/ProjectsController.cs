using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Planner.API.Data;
using System;
using System.Collections.Generic;
using Planner.API.Model;
using Microsoft.AspNetCore.Authorization;

namespace Planner.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route ("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly DataContext _context;

        public ProjectsController (DataContext context)
        {
            _context = context;
        }

        [HttpGet("get")]
        public async Task<IActionResult> GetProjects ()
        {
            var projects = await _context.Projects.ToListAsync();
            return Ok(projects);
        }

        [HttpPost("post")]
        public void PostProject(Project project) {
            Console.WriteLine(project.Name);
        }
    }
}