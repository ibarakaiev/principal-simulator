var scenarios = [{
        from: "trustees",
        situation: "A long-time donor has offered the school an additional $10m to accept her child who was waitlisted during the regular application cycle.",
        options: [{
                label: "Accept the student",
                results: {
                    students: -10,
                    trustees: 10,
                    faculty: -8,
                    endowment: 10000000,
                    revenue: 1000000
                },
                outcome: "Though students and faculty are somewhat unhappy with the acceptance, the donor also pledged a recurring $1m donation to the school in gratitude."
            },
            {
                label: "Deny the student",
                results: {
                    students: 0,
                    trustees: -10,
                    faculty: 15,
                    revenue: -1000000
                },
                outcome: "The faculty praised you for protecting the integrity of the application cycle. Unfortunately, the donor discontinued her annual $1m donation."
            }
        ]
    },
    {
        from: "students",
        situation: "Students are requesting the complete and total discontinuation of parietal rules, so that any student can visit anyone else's dorm without supervision (except during study hours, of course).",
        options: [{
                label: "Abolish parietal rules",
                results: {
                    students: 20,
                    parents: -15,
                    faculty: 0,
                    image: 5,
                    trustees: -10
                },
                outcome: "The students are thrilled. The parents and trustees are, well, not so thrilled. The school did get some positive press coverage, though!"
            },
            {
                label: "Keep parietal rules unchanged",
                results: {
                    students: -5,
                    parents: 5,
                    faculty: 0,
                    image: -5,
                    trustees: 5
                },
                outcome: "Though the students were disappointed, not much ultimately changed. Everyone moved on."
            }
        ]
    },
    {
        from: "trustees",
        situation: "On an admissions interview for their child, one trustee noticed that the rival school's science center was far better than your own. They propose launching a new capital campaign to replace the 20-year-old existing science center.",
        options: [{
                label: "Build it!",
                results: {
                    students: -10,
                    parents: 5,
                    faculty: -10,
                    image: 25,
                    trustees: 10,
                    expenses: 50000000,
                    endowment: 20000000
                },
                outcome: "Because the old science building wasn't that old, the capital campaign wasn't as successful as anticipated. While you were able to raise $20m, the total cost came out to $50m. You did hang a whale skeleton in it, though, and that helped the school's image. Faculty and students were frustrated and viewed the new building as a frivolous expense."
            },
            {
                label: "Keep the old science center",
                results: {
                    students: 0,
                    parents: -5,
                    faculty: 0,
                    image: -5,
                    trustees: 5
                },
                outcome: "Nothing changed—literally. Parents were a little disappointed, but the trustees were happy; after all, it meant that they didn't have to donate to another campaign!"
            }
        ]
    },
    {
        from: "faculty",
        situation: "Faculty and staff request a $20,000 raise in salary.",
        options: [{
                label: "Give them a $30,000 raise!",
                results: {
                    students: 5,
                    parents: -10,
                    faculty: 100,
                    image: 20,
                    trustees: -20,
                    expenses: 10000000,
                },
                outcome: "Teachers rejoiced, and students were happier too! Willips was praised in the local papers for being a leader in educator salaries. You had to raise tuition, though, so parents and trustees were a bit annoyed."
            },
            {
                label: "Give them a $20,000 raise.",
                results: {
                    students: 5,
                    parents: -10,
                    faculty: 50,
                    image: 20,
                    trustees: -20,
                    expenses: 7000000,
                },
                outcome: "Teachers were very happy with the change, and felt that their voice was heard. Students felt the benefit as well. Willips was praised in the local paper for its pioneering decision, but the trustees were annoyed that you didn't consult them first."
            },
            {
                label: "Don't give them a raise.",
                results: {
                    students: 0,
                    parents: 5,
                    faculty: -20,
                    image: -10,
                    trustees: 10,
                },
                outcome: "Teachers were angry, but the budget remained untouched. Parents were relieved that there wouldn't be any increase in tuition."
            }
        ]
    },
    {
        from: "faculty",
        situation: "Faculty and staff request a $20,000 raise in salary.",
        options: [{
                label: "Give them a $30,000 raise!",
                results: {
                    students: 5,
                    parents: -10,
                    faculty: 100,
                    image: 20,
                    trustees: -20,
                    expenses: 10000000,
                },
                outcome: "Teachers rejoiced, and students were happier too! Willips was praised in the local papers for being a leader in educator salaries. You had to raise tuition, though, so parents and trustees were a bit annoyed."
            },
            {
                label: "Give them a $20,000 raise.",
                results: {
                    students: 5,
                    parents: -10,
                    faculty: 50,
                    image: 20,
                    trustees: -20,
                    expenses: 7000000,
                },
                outcome: "Teachers were very happy with the change, and felt that their voice was heard. Students felt the benefit as well. Willips was praised in the local paper for its pioneering decision, but the trustees were annoyed that you didn't consult them first."
            },
            {
                label: "Don't give them a raise.",
                results: {
                    students: 0,
                    parents: 5,
                    faculty: -20,
                    image: -10,
                    trustees: 10,
                },
                outcome: "Teachers were angry, but the budget remained untouched. Parents were relieved that there wouldn't be any increase in tuition."
            }
        ]
    },
    {
        from: "trustees",
        situation: "The trustees propose re-introducing Saturday classes to aid learning.",
        options: [{
                label: "Do it! Saturday classes rock!",
                results: {
                    students: -50,
                    parents: -20,
                    faculty: -30,
                    image: -30,
                    trustees: 20,
                    expenses: 500000,
                },
                outcome: "That was stupid. Students don't want Saturday classes. Parents don't want Saturday classes. Faculty definitely don't want Saturday classes. Literally only the trustees wanted Saturday classes. Why did you even?"
            },
            {
                label: "Laugh it off because Saturday classes suck",
                results: {
                    students: 10,
                    parents: 10,
                    faculty: 10,
                    image: 0,
                    trustees: -20
                },
                outcome: "You made the right choice. Trustees weren't happy, but everyone else was."
            }
        ]
    },
    {
        from: "students",
        situation: "Citing the increasing socioeconomic divide on campus, Student Council proposes abolishing tuition altogether. Several donors offer a one-time donation of $75m to finance the effort, but the trustees aren't all on board.",
        options: [{
                label: "Abolish tuition!",
                results: {
                    students: 30,
                    parents: 50,
                    faculty: 30,
                    image: 40,
                    trustees: -20,
                    revenue: -60000000,
                },
                outcome: "Almost everyone was happy with your decision. Good luck balancing that budget, though."
            },
            {
                label: "Keep tuition unchanged.",
                results: {
                    students: -10,
                    parents: -10,
                    image: -10,
                    trustees: 20
                },
                outcome: "Parents and students were slightly disappointed, but the trustees and donors were relieved that they didn't need to finance the ambitious decision. But things moved on as as per usual."
            }
        ]
    }
]