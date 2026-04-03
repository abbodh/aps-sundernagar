using Microsoft.AspNetCore.Mvc;
using SchoolManagementSystem.Models;

namespace SchoolManagementSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private static readonly List<Student> Students = new()
        {
            new Student { Id = 1, FirstName = "Emma", LastName = "Johnson", EnrollmentDate = DateTime.UtcNow.AddYears(-1) },
            new Student { Id = 2, FirstName = "Liam", LastName = "Smith", EnrollmentDate = DateTime.UtcNow.AddMonths(-6) },
            new Student { Id = 3, FirstName = "Olivia", LastName = "Wang", EnrollmentDate = DateTime.UtcNow.AddMonths(-3) }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Student>> Get()
        {
            return Ok(Students);
        }

        [HttpGet("{id:int}")]
        public ActionResult<Student> Get(int id)
        {
            var student = Students.FirstOrDefault(s => s.Id == id);
            if (student == null) return NotFound();
            return Ok(student);
        }

        [HttpPost]
        public ActionResult<Student> Create(Student student)
        {
            student.Id = Students.Any() ? Students.Max(s => s.Id) + 1 : 1;
            Students.Add(student);
            return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
        }

        [HttpPut("{id:int}")]
        public IActionResult Update(int id, Student updated)
        {
            var existing = Students.FirstOrDefault(s => s.Id == id);
            if (existing == null) return NotFound();

            existing.FirstName = updated.FirstName;
            existing.LastName = updated.LastName;
            existing.EnrollmentDate = updated.EnrollmentDate;

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            var student = Students.FirstOrDefault(s => s.Id == id);
            if (student == null) return NotFound();
            Students.Remove(student);
            return NoContent();
        }
    }
}
