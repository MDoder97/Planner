using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Planner.API.Data;

namespace Planner.API.Controllers {
    [Authorize]
    [ApiController]
    [Route ("api/[controller]")]
    public class TaskController : ControllerBase {
        private readonly ISchismRepository _repo;
        private readonly DataContext _context;

        public TaskController (ISchismRepository repo, DataContext context) {
            _context = context;
            _repo = repo;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddTask()
        {
            return Ok();
        }
    }
}