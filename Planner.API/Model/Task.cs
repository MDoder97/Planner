using System;
using System.Collections.Generic;

namespace Planner.API.Model
{
    public class Task
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool Complete { get; set; }
        public DateTime Deadline { get; }
        public int Position { get; set; }
        public User Assignee { get; set; }
        public ICollection<Tag> Tags { get; set; }
        public ICollection<Task> Subtasks { get; set; }
        public Tasklist TaskList { get; set; }
        public int TaskListId { get; set; }

    }
}