using System.Collections.Generic;

namespace Planner.API.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public ICollection<Notification> Notifications { get; set; }
        //public ICollection<Project> Projects { get; set; }

        // public Project Project { get; set; }
        // public int ProjectId { get; set; }
    }
}