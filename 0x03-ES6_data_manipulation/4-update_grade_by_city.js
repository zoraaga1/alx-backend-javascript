export default function updateStudentGradeByCity(students, city, newGrades) {
	if (students instanceof Array) {
		return students
			.filter(student => student.city === city)
			.map(student => {
					const newGrade = newGrades.find(grade => grade.studentId === student.id);
					return {
							...student,
							grade: newGrade ? newGrade.grade : 'N/A'
					};
			});
	}
	return [];
}
