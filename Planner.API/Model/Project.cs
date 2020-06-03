using System.Collections.Generic;

namespace Planner.API.Model
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
       // public ICollection<User> Members { get; set; }
        public ICollection<Tasklist> Tasklists { get; set; }
        //public User User { get; set; }
        //public User userId { get; set; }
    }
}