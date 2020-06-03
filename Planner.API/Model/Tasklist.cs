using System.Collections.Generic;

namespace Planner.API.Model
{
    public class Tasklist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Task> Tasks { get; set; }
        public bool CheckListMode { get; set; }
        public Project Project { get; set; }
        public int ProjectId { get; set; }
    }
}