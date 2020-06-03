namespace Planner.API.Model
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Task Task { get; set; }
        public int TaskId { get; set; }
    }
}