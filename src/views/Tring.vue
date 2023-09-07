<template>
    <div id="app">
        <table class="table col-md-12" style="background-color:white;">
            <th>
                <input class="form-control float-right" type="text" id="myInput" v-model="filter"
                    style="background-color: rgb(224, 245, 245); width: 20%; height: 20%;">
            </th>
            <tbody>
                <div class="card col-md-11 mt-3 mx-auto" v-for="(uStudent) in filteredStudents"
                    v-bind:key="uStudent.student_id" id="myList">
                    <div class="card-body">
                        <div class="row">
                            <h6>{{ uStudent.student_name }}</h6>
                            
                            <a href="" class="col-md-1" @click="setLectureFK(uStudent.student_id)"><i
                                    class="fas fa-user-plus"></i></a>
                        </div>
                    </div>
                </div>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uStudents: [
                { student_name: 'Alex' },
                {  student_name: 'Jane' },
                {  student_name: 'kane' },
                {  student_name: 'fane' },
                {  student_name: 'dane' },
            ],
            filter: ''
        }
    },
    computed: {
        filteredStudents() {
            return this.uStudents.filter(user => {
                const filter = this.filter.toUpperCase();
                const hasIdMatch = String(user.student_id).includes(filter);
                const hasNameMatch = user.student_name.toUpperCase().includes(filter);

                return hasIdMatch || hasNameMatch;
            })
        }
    },

}
</script>

<style scoped></style>