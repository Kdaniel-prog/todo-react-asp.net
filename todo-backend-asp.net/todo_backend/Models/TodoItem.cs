namespace todo_backend
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string? title { get; set; }

        public string? details { get; set; }

        public int status { get; set; }
        public DateTime date { get; set; }

        public int priority { get; set; }
        
    }
}