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
    },

    {
      from: "students",
      situation: "Students request to be able to sleep over in opposite-gender dorms.",
      options: [
        {
          label: "Allow this",
          results: {
            students: 5,
            parents: -5,
            faculty: -2,
            image: 0,
            trustees: 0

          }
        },
        {
          label: "Deny this",
          results: {
            students: -3,
            parents: +2,
            faculty: 0,
            image: 0,
            trustees: +1
        }
      }
      ]
    },
    {
      from: "image",
      situation: "A request from the town to remove a statue from your campus.",
      options: [
        {
          label: "Keep statue",
          results: {
            students: 0,
            parents: -2,
            faculty: 0,
            image: -2,
            trustees: +1

          }
        },
        {
          label: "Remove statue",
          results: {
            students: -3,
            parents: +2,
            faculty: 0,
            image: +3,
            trustees: -2
        }
      }
      ]
    }
]
