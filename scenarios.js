var scenarios = [
    {
        from: "trustees",
        situation: "A donor has offered the school $5m to accept their child.",
        options: [
            {
                label: "Accept the student",
                results: {
                    students: -3,
                    trustees: 3,
                    faculty: -5,
                    endowment: 5000000
                }
            },
            {
                label: "Deny the student",
                results: {
                    students: 0,
                    trustees: -5,
                    faculty: 2
                }
            }
        ]
    }
]