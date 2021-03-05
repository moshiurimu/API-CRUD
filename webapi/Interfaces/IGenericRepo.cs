using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Interfaces
{
  public  interface IGenericRepo<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<List<T>> ListAllAsync();
        Task<List<T>> TrashListAllAsync();

        void Add(T entity);
        void Update(T entity);
        void UpdateRange(List<T> entities);
        void Delete(T entity); 
        void Recovery(T entity);
    }
}
