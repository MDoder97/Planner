using System.Threading.Tasks;
using Planner.API.Model;

namespace Planner.API.Data
{
    public class SchismRepository : ISchismRepository
    {
        private readonly DataContext _context;
        public SchismRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        
        public void Update<T>(T entity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public Task<User> GetUser(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> saveAll()
        {
            throw new System.NotImplementedException();
        }

    }
}