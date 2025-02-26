

    const employees = [
        {
            "id": 1,
            "firstName": "Amit",
            "email": "employee1@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Complete project report",
                    "date": "2025-02-24",
                    "description": "Prepare and submit the final project report.",
                    "category": "Work",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Attend team meeting",
                    "date": "2025-02-25",
                    "description": "Participate in the weekly team meeting.",
                    "category": "Meeting",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Review code",
                    "date": "2025-02-23",
                    "description": "Check and review the latest code changes.",
                    "category": "Development",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                }
            ],
            "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
        },
        {
            "id": 2,
            "firstName": "Raj",
            "email": "employee2@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Fix bug in login system",
                    "date": "2025-02-22",
                    "description": "Resolve the login issue reported by users.",
                    "category": "Development",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Write documentation",
                    "date": "2025-02-26",
                    "description": "Prepare detailed documentation for the API endpoints.",
                    "category": "Documentation",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Client presentation",
                    "date": "2025-02-28",
                    "description": "Prepare and deliver the project presentation to the client.",
                    "category": "Presentation",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Database backup",
                    "date": "2025-02-23",
                    "description": "Ensure that a complete backup of the database is taken.",
                    "category": "Maintenance",
                    "active": false,
                    "newTask": false,
                    "completed": false,
                    "failed": true
                }
            ],
            "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
        },
        {
            "id": 3,
            "firstName": "Suresh",
            "email": "employee3@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Design new UI components",
                    "date": "2025-02-24",
                    "description": "Create and test new UI components for the dashboard.",
                    "category": "Design",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Conduct user testing",
                    "date": "2025-02-27",
                    "description": "Collect feedback from users on the latest features.",
                    "category": "Testing",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                }
            ],
            "taskCount": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 }
        },
        {
            "id": 4,
            "firstName": "Vikram",
            "email": "employee4@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Optimize database queries",
                    "date": "2025-02-25",
                    "description": "Improve database performance by optimizing slow queries.",
                    "category": "Development",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Update software dependencies",
                    "date": "2025-02-26",
                    "description": "Update all outdated dependencies and check for compatibility.",
                    "category": "Maintenance",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Write unit tests",
                    "date": "2025-02-23",
                    "description": "Create unit tests for the authentication module.",
                    "category": "Testing",
                    "active": false,
                    "newTask": false,
                    "completed": false,
                    "failed": true
                }
            ],
            "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 1 }
        }
    ];

    const admin = [
        {
            "id": 1,
            "firstName": "Arjun",
            "email": "admin@example.com",
            "password": "123"
        }
    ];


    export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
    }

    export const getLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))

        return { employees, admin }
    } 
