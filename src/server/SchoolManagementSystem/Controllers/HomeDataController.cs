using Microsoft.AspNetCore.Mvc;

namespace SchoolManagementSystem.Controllers
{
    public class HomeContent
    {
        public string Title { get; set; } = string.Empty;
        public string Subtitle { get; set; } = string.Empty;
        public IEnumerable<string> SlideImageUrls { get; set; } = Array.Empty<string>();
        public string CallToAction { get; set; } = string.Empty;
    }

    [ApiController]
    [Route("api/[controller]")]
    public class HomeDataController : ControllerBase
    {
        [HttpGet]
        public ActionResult<HomeContent> Get()
        {
            var content = new HomeContent
            {
                Title = "Welcome to School Management System",
                Subtitle = "Multiple tools, one platform for managing students, teachers, and more.",
                CallToAction = "Explore the dashboard by logging in.",
                SlideImageUrls = new[]
                {
                    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702d?auto=format&fit=crop&w=1350&q=80", // kindergarten classroom
                    "https://images.unsplash.com/photo-1504797264048-5f4dcfc1f1d5?auto=format&fit=crop&w=1350&q=80", // children drawing together
                    "https://images.unsplash.com/photo-1582719478144-128f4f687175?auto=format&fit=crop&w=1350&q=80" // kids playing in school
                }
            };

            return Ok(content);
        }
    }
}
