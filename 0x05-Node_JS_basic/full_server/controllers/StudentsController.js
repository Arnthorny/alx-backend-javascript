import readDatabase from "../utils";

const path = process.argv[2];

class studentsController {
  static async getAllStudents(req, res) {
    await readDatabase(path).then(
      (dataObj) => {
        res.status(200);
        let retStr = "This is the list of our students\n";

        const keyArr = Object.keys(dataObj).sort((a, b) =>
          a.toLowerCase() < b.toLowerCase() ? -1 : 1
        );

        for (const field of keyArr) {
          if (Array.isArray(dataObj[field])) {
            const len = dataObj[field].length;
            const firstnames = dataObj[field].join(", ");
            retStr += `Number of students in ${field}: ${len}. List: ${firstnames}\n`;
          }
        }
        res.send(retStr.trimRight());
      },
      (err) => {
        res.status(500).send(err.message);
      }
    );
  }

  static async getAllStudentsByMajor(req, res) {
    const validMajors = ["CS", "SWE"];
    const major = validMajors.filter((major) => major === req.params.major)[0];
    if (major === undefined) {
      res.status(500).send("Major parameter must be CS or SWE");
    } else {
      await readDatabase(path).then(
        (dataObj) => {
          const firstnames = dataObj[major].join(", ");

          res.status(200);
          res.send(`List: ${firstnames}`);
        },
        (err) => {
          res.status(500);
          res.send(err.message);
        }
      );
    }
  }
}

export default studentsController;
