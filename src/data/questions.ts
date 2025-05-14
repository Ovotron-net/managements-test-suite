
export interface Question {
  id: number;
  questionText: string;
  scenario?: string;
  options: { value: string; label: string }[];
  correctAnswer: string;
  explanation?: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    questionText: "Which software development methodology is most suitable for projects with rapidly changing requirements?",
    options: [
      { value: "a", label: "Waterfall" },
      { value: "b", label: "Agile" },
      { value: "c", label: "Spiral" },
      { value: "d", label: "V-Model" }
    ],
    correctAnswer: "b",
    explanation: "Agile methodologies are designed to accommodate changing requirements through iterative development, regular customer feedback, and the ability to pivot quickly based on that feedback.",
    category: "Development Methodologies"
  },
  {
    id: 2,
    questionText: "What is the primary purpose of a sprint retrospective in Scrum?",
    options: [
      { value: "a", label: "To plan work for the next sprint" },
      { value: "b", label: "To review and demonstrate completed work" },
      { value: "c", label: "To reflect on the process and identify improvements" },
      { value: "d", label: "To assign tasks to team members" }
    ],
    correctAnswer: "c",
    explanation: "A sprint retrospective is held at the end of a sprint to reflect on what went well, what could be improved, and what actions to take in the next sprint to improve the team's process.",
    category: "Agile & Scrum"
  },
  {
    id: 3,
    questionText: "What is technical debt?",
    options: [
      { value: "a", label: "The cost of maintaining outdated hardware" },
      { value: "b", label: "The financial investment in technical training" },
      { value: "c", label: "The consequence of taking shortcuts in software development that will require future rework" },
      { value: "d", label: "The licensing costs for third-party software" }
    ],
    correctAnswer: "c",
    explanation: "Technical debt refers to the implied cost of future rework caused by choosing a quick but suboptimal solution now instead of implementing a better approach that would take longer.",
    category: "Software Quality"
  },
  {
    id: 4,
    questionText: "As a project manager, you notice that a senior developer consistently makes architecture decisions that impact other teams without consultation. What leadership approach would be most effective?",
    scenario: "Your software development organization consists of multiple teams working on a complex product. Their work is interconnected but each team has a high degree of autonomy.",
    options: [
      { value: "a", label: "Enact a formal approval process requiring all architecture decisions to be signed off by you" },
      { value: "b", label: "Speak privately with the developer about the impact of their actions and establish a collaborative decision-making framework" },
      { value: "c", label: "Move the developer to a role with less authority to prevent further issues" },
      { value: "d", label: "Let the teams resolve the conflict themselves to promote self-organization" }
    ],
    correctAnswer: "b",
    explanation: "Private coaching followed by establishing a collaborative framework addresses the immediate issue while building better processes for the future. It respects the developer's expertise while ensuring others are appropriately consulted.",
    category: "Leadership & Team Management"
  },
  {
    id: 5,
    questionText: "What is the primary benefit of continuous integration in software development?",
    options: [
      { value: "a", label: "It eliminates the need for testing" },
      { value: "b", label: "It reduces hardware costs" },
      { value: "c", label: "It identifies integration issues early" },
      { value: "d", label: "It automatically fixes bugs in the code" }
    ],
    correctAnswer: "c",
    explanation: "Continuous integration involves frequently merging code changes into a shared repository, followed by automated builds and tests. This practice helps detect integration issues early, making them easier and less costly to fix.",
    category: "DevOps & CI/CD"
  },
  {
    id: 6,
    questionText: "Which of the following is NOT typically a key responsibility of a software engineering manager?",
    options: [
      { value: "a", label: "Resource allocation and team composition" },
      { value: "b", label: "Technical mentorship and career development" },
      { value: "c", label: "Writing the majority of the production code" },
      { value: "d", label: "Process improvement and quality assurance" }
    ],
    correctAnswer: "c",
    explanation: "While software engineering managers should have technical expertise, their primary role is to lead, manage resources, mentor team members, and ensure processes work effectively. Writing the majority of production code is typically not a key responsibility, as this would be primarily handled by developers on the team.",
    category: "Leadership & Team Management"
  },
  {
    id: 7,
    questionText: "You're leading a team that needs to reduce the number of bugs reported by customers. Which of the following approaches would likely be MOST effective?",
    options: [
      { value: "a", label: "Implement stricter code review processes" },
      { value: "b", label: "Add more QA testers to find bugs before release" },
      { value: "c", label: "Adopt test-driven development practices" },
      { value: "d", label: "Allocate more time for manual testing" }
    ],
    correctAnswer: "c",
    explanation: "While all options could help reduce bugs, test-driven development (TDD) tends to be most effective because it builds quality into the development process itself. By writing tests before code, developers think more carefully about design and edge cases, resulting in more robust code with fewer defects.",
    category: "Software Quality"
  },
  {
    id: 8,
    questionText: "Which risk management strategy involves accepting the possibility that a risk might occur and dealing with the consequences if it does?",
    options: [
      { value: "a", label: "Risk avoidance" },
      { value: "b", label: "Risk mitigation" },
      { value: "c", label: "Risk transference" },
      { value: "d", label: "Risk acceptance" }
    ],
    correctAnswer: "d",
    explanation: "Risk acceptance is a strategy where the project team acknowledges the risk but decides not to take any action unless the risk occurs. This is typically done when the cost of addressing the risk would be greater than the impact if it occurred, or when the probability is very low.",
    category: "Risk Management"
  },
  {
    id: 9,
    questionText: "Your team is experiencing high turnover, with several key engineers leaving in the past few months. What should be your first step in addressing this issue?",
    options: [
      { value: "a", label: "Immediately increase salaries to retain remaining staff" },
      { value: "b", label: "Conduct exit interviews and gather data on reasons for departure" },
      { value: "c", label: "Implement a hiring freeze until the issue is resolved" },
      { value: "d", label: "Reassign critical work to contractors" }
    ],
    correctAnswer: "b",
    explanation: "Before implementing solutions, it's essential to understand the underlying causes of turnover. Exit interviews and data gathering provide insights into whether people are leaving due to compensation, management issues, work environment, career growth limitations, or other factors. This understanding guides appropriate retention strategies.",
    category: "Leadership & Team Management"
  },
  {
    id: 10,
    questionText: "What is the main purpose of a work breakdown structure (WBS) in project management?",
    options: [
      { value: "a", label: "To assign blame when tasks are not completed" },
      { value: "b", label: "To break down complex deliverables into manageable components" },
      { value: "c", label: "To track individual developer performance" },
      { value: "d", label: "To determine team bonuses" }
    ],
    correctAnswer: "b",
    explanation: "A work breakdown structure (WBS) is a deliverable-oriented decomposition of a project into smaller components. It defines and groups a project's discrete work elements in a way that helps organize and define the total work scope of the project, making complex projects more manageable.",
    category: "Project Management"
  },
  {
    id: 11,
    questionText: "Which of the following best describes the concept of 'shift left' in software testing?",
    options: [
      { value: "a", label: "Moving testing activities earlier in the development process" },
      { value: "b", label: "Prioritizing left-to-right reading of code during code reviews" },
      { value: "c", label: "Changing the project timeline to start earlier" },
      { value: "d", label: "Delegating testing responsibilities to junior team members" }
    ],
    correctAnswer: "a",
    explanation: "'Shift left' refers to moving testing activities earlier in the software development lifecycle, rather than waiting until after implementation. This approach helps catch defects earlier when they are less expensive to fix and promotes building quality into the product from the start.",
    category: "Software Quality"
  },
  {
    id: 12,
    questionText: "A team member approaches you with a technical solution they're excited about, but you know it doesn't align with the project's requirements. How should you respond?",
    scenario: "You're managing a project with tight deadlines and specific client requirements.",
    options: [
      { value: "a", label: "Reject the idea immediately to avoid wasting time" },
      { value: "b", label: "Allow them to implement it anyway to maintain enthusiasm" },
      { value: "c", label: "Ask them to explain their solution's benefits and discuss how it relates to project requirements" },
      { value: "d", label: "Tell them to discuss it with the team instead of bringing it to you" }
    ],
    correctAnswer: "c",
    explanation: "Engaging in a dialogue validates the team member's initiative while providing an opportunity to guide their thinking toward project requirements. They may have insights you haven't considered, or they might recognize the misalignment through discussion. This approach supports both innovation and project focus.",
    category: "Leadership & Team Management"
  },
  {
    id: 13,
    questionText: "What does the 'bus factor' refer to in software development teams?",
    options: [
      { value: "a", label: "The efficiency of team transportation arrangements" },
      { value: "b", label: "The number of team members who could be lost (hit by a bus) before the project fails" },
      { value: "c", label: "The environmental impact of the team's commuting habits" },
      { value: "d", label: "The ratio of remote workers to office-based staff" }
    ],
    correctAnswer: "b",
    explanation: "The 'bus factor' is a measurement of risk indicating the number of team members who would need to be lost (e.g., quit, get sick, or figuratively 'hit by a bus') before the project would be in serious trouble due to lack of knowledge or capability. A low bus factor indicates concentrated knowledge and high project risk.",
    category: "Risk Management"
  },
  {
    id: 14,
    questionText: "Which estimation technique involves team members privately estimating tasks and then revealing their estimates simultaneously?",
    options: [
      { value: "a", label: "Delphi method" },
      { value: "b", label: "Planning poker" },
      { value: "c", label: "PERT analysis" },
      { value: "d", label: "Function point analysis" }
    ],
    correctAnswer: "b",
    explanation: "Planning poker (also called Scrum poker) is an agile estimation technique where team members make estimates by playing numbered cards face-down, then revealing them simultaneously. This prevents anchoring bias where early estimates influence others and encourages discussion when estimates differ significantly.",
    category: "Project Management"
  },
  {
    id: 15,
    questionText: "Your development team is experiencing conflicts with the operations team about deployment procedures. Which approach would likely be most effective in resolving this issue?",
    options: [
      { value: "a", label: "Have senior management dictate a deployment policy" },
      { value: "b", label: "Let each team handle their part of the deployment independently" },
      { value: "c", label: "Implement DevOps practices with cross-functional responsibilities" },
      { value: "d", label: "Outsource the deployment process to a third party" }
    ],
    correctAnswer: "c",
    explanation: "DevOps practices break down silos between development and operations, creating shared responsibility and collaborative processes. By implementing DevOps practices, both teams would work together to define deployment procedures that address both development agility and operational stability concerns.",
    category: "DevOps & CI/CD"
  },
  {
    id: 16,
    questionText: "Which of the following is NOT a key principle of servant leadership in software engineering management?",
    options: [
      { value: "a", label: "Prioritizing team growth and development" },
      { value: "b", label: "Making unilateral decisions to save time" },
      { value: "c", label: "Actively listening to team concerns" },
      { value: "d", label: "Removing obstacles that hinder team progress" }
    ],
    correctAnswer: "b",
    explanation: "Servant leadership emphasizes collaboration, empathy, and empowering team members—not unilateral decision-making. A servant leader prioritizes team needs, listens actively, removes obstacles, and focuses on team growth. Making unilateral decisions without input contradicts the collaborative nature of servant leadership.",
    category: "Leadership & Team Management"
  },
  {
    id: 17,
    questionText: "What is the primary benefit of peer code reviews?",
    options: [
      { value: "a", label: "To evaluate individual developer performance for promotion decisions" },
      { value: "b", label: "To detect defects early and share knowledge across the team" },
      { value: "c", label: "To slow down the development process and create documentation" },
      { value: "d", label: "To ensure managers understand all code being written" }
    ],
    correctAnswer: "b",
    explanation: "Peer code reviews primarily serve to identify defects early in the development cycle when they're less costly to fix. They also facilitate knowledge sharing, help maintain code consistency, and provide learning opportunities for both reviewers and authors. They are not primarily meant for performance evaluation or to create bureaucracy.",
    category: "Software Quality"
  },
  {
    id: 18,
    questionText: "You need to make a critical architectural decision, but team members have conflicting opinions. What would be the most effective approach?",
    options: [
      { value: "a", label: "Choose the solution preferred by the most senior developer" },
      { value: "b", label: "Select the fastest solution to implement to meet deadlines" },
      { value: "c", label: "Document multiple options with trade-offs and evaluate against project requirements" },
      { value: "d", label: "Delegate the decision to the product owner" }
    ],
    correctAnswer: "c",
    explanation: "Documenting multiple options with their trade-offs and evaluating them against project requirements is the most effective approach. This process ensures decisions are based on objective criteria rather than opinions or hierarchy, considers long-term implications, and creates a record of decision rationale.",
    category: "Architecture & Design"
  },
  {
    id: 19,
    questionText: "Which of the following metrics would be LEAST helpful in measuring the productivity of a software development team?",
    options: [
      { value: "a", label: "Lead time for changes (time from code commit to production)" },
      { value: "b", label: "Lines of code written per developer" },
      { value: "c", label: "Deployment frequency" },
      { value: "d", label: "Defect escape rate" }
    ],
    correctAnswer: "b",
    explanation: "Lines of code is generally considered a poor productivity metric as it incentivizes verbose code rather than efficient solutions. More concise, elegant code might actually be more valuable. The other options measure outcomes that directly relate to delivering value: speed of delivery, frequency of value delivery, and quality.",
    category: "Metrics & Performance"
  },
  {
    id: 20,
    questionText: "What is the most important consideration when implementing a microservices architecture?",
    options: [
      { value: "a", label: "Ensuring all services are written in the same programming language" },
      { value: "b", label: "Defining clear service boundaries and interfaces" },
      { value: "c", label: "Maximizing the number of services to improve scalability" },
      { value: "d", label: "Assigning each service to a specific developer" }
    ],
    correctAnswer: "b",
    explanation: "The most important consideration in microservices architecture is defining clear service boundaries and interfaces. Well-defined boundaries ensure services are truly independent, with high cohesion within services and loose coupling between them. Clear interfaces enable services to communicate effectively without creating hidden dependencies.",
    category: "Architecture & Design"
  }
];
