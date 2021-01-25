import Project from "./components/Project";

const projects = [
    {
        src: './img/budget.png',
        title: 'Budget Tracker',
        text: 'PWA to track your budget on or offline.',
        github: 'https://github.com/bravedown/budget-tracker'
    },
    {
        src: './img/employee.png',
        title: 'Employee Tracker',
        text: 'Node.js command line app to track employees in a company.',
        github: 'https://github.com/bravedown/employee-manager'
    },
    {
        src: './img/goldview.png',
        title: 'Gold View',
        text: 'App to view stock charts in terms of their value in gold over time.',
        github: 'https://github.com/bravedown/gold-view'
    },
    {
        src: './img/password.png',
        title: 'Password Generator',
        text: 'App to generate secure passwords.',
        github: 'https://github.com/bravedown/password-generator'
    },
    {
        src: './img/weather.png',
        title: 'Weather Dashboard',
        text: 'App to view the weather forecast for the week by searching a city.',
        github: 'https://github.com/bravedown/weather-dashboard'
    },
    {
        src: './img/workout.png',
        title: 'Workout Tracker',
        text: 'App to track your workouts. Data is stored in MongoDB.',
        github: 'https://github.com/bravedown/fitness-tracker'
    },
];

const ProjectElements = projects.map(e => (
    <Project
      src={e.src}
      title={e.title}
      text={e.text}
      github={e.github}
    />
));

export default ProjectElements;