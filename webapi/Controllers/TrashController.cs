using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Entities;
using WebApi.Interfaces;

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TrashController : ControllerBase
    {
        private readonly IGenericRepo<Employee> _employeeRepo;

        public TrashController(IGenericRepo<Employee> employeeRepo)
        {
            _employeeRepo = employeeRepo;
        }

        // GET: api/Trash
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _employeeRepo.TrashListAllAsync();
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> RecoverEmployee(int id)
        {
            var employee = await _employeeRepo.GetByIdAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _employeeRepo.Recovery(employee);


            return NoContent();
        }
    }
}
