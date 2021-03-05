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
    public class UserPermissionsController : ControllerBase
    {
        private readonly IGenericRepo<UserPermission> _userPermissionRepo;

        public UserPermissionsController(IGenericRepo<UserPermission> userPermissionRepo)
        {
            _userPermissionRepo = userPermissionRepo;
        }

        // GET: api/UserPermissions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserPermission>>> GetUserPermissions()
        {
            return await _userPermissionRepo.ListAllAsync();
        }

        

        // PUT: api/UserPermissions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PutUserPermission( List<UserPermission> userPermission)
        {
            if ( userPermission.Count() == 0)
            {
                return BadRequest();
            }

            _userPermissionRepo.UpdateRange(userPermission);
                        
            return NoContent();
        }

        
    }
}
