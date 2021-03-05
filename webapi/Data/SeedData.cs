using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Data
{
    public class SeedData
    {
        public static async Task SeedAsync(AppDbContext context,
            ILoggerFactory loggerFactory, UserManager<User> userManager, RoleManager<Role> roleManager, int? retry = 0)
        {
            int retryForAvailability = retry.Value;


            await roleManager.CreateAsync(new Role { Name = "Admin" });
            await roleManager.CreateAsync(new Role { Name = "User" });
            

            string saUser = "moshiur.imu@gmail.com";
            var defaultUser = new User { UserName = "moshiur.imu@gmail.com", Email = "moshiur.imu@gmail.com" };
            await userManager.CreateAsync(defaultUser, "aA111111!");
            defaultUser = await userManager.FindByNameAsync(saUser);
            await userManager.AddToRoleAsync(defaultUser, "Admin");


            try
            {
                
                if (!context.Employees.Any())
                {
                    context.Employees.AddRange(
                        GetPreconfiguredEmployees());

                    await context.SaveChangesAsync();
                }

                if (!context.UserPermissions.Any())
                {
                    context.UserPermissions.AddRange(
                        GetPreconfiguredUserPermission());

                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                if (retryForAvailability < 10)
                {
                    retryForAvailability++;
                    var log = loggerFactory.CreateLogger<SeedData>();
                    log.LogError(ex.Message);
                    await SeedAsync(context, loggerFactory, userManager, roleManager, retryForAvailability);
                }
                throw;
            }
        }

        static IEnumerable<Employee> GetPreconfiguredEmployees()
        {
            return new List<Employee>()
            {
                
                new Employee("Rohim", "CEO", "01712000000",  "Kashiani,Gopalganj"),
                new Employee("Korim", "CTO", "01712111111",  "Kashiani,Gopalganj"),
                new Employee("Moshiur Rahman", "Software Engineer", "01712512299",  "Kashiani,Gopalganj")


            };
        }

        static IEnumerable<UserPermission> GetPreconfiguredUserPermission()
        {
            return new List<UserPermission>()
            {

                new UserPermission("Add", true, 1),
                 new UserPermission("Edit", true, 2),
                  new UserPermission("Update", true, 3),
                   new UserPermission("Delete", true, 4),


            };
        }
    }
}
