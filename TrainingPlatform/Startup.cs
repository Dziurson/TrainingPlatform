using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TrainingPlatform.Startup))]
namespace TrainingPlatform
{
  public partial class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      ConfigureAuth(app);
    }
  }
}
