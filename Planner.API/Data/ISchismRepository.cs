using System.Threading.Tasks;
using Planner.API.Model;

namespace Planner.API.Data
{
    public interface ISchismRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        void Update<T>(T entity) where T: class;
        Task<User> GetUser(int id);
        Task<bool> saveAll();
    }
}