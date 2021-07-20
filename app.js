const app = Vue.createApp({

    data() {
        return {
            firstName: "Ravi Shankar",
            lastName: "Nayak",
            gender: 'male',
            email: "ravishankarnayak2000@gmail.com",
            date: "2001-01-01T07:07:77.571Z",
            age: "20",
            picture: "https://media-exp3.licdn.com/dms/image/C5103AQEzd5yR6I4V8A/profile-displayphoto-shrink_100_100/0/1575402771401?e=1631750400&v=beta&t=HmcdjKFY1Xmar5RZwaT7834gvzYrU0M9_scppqztCYs"
        }
        },
        methods: {
            async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            //console.log(results)
            
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender= results[0].gender
            this.email= results[0].email
            this.picture= results[0].picture.large
            this.date= results[0].dob.date
            this.age= results[0].dob.age
            },
    },
})

app.mount('#app')