namespace Planner.API.Model
{
    public class Notification
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public string SenderEmail { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}