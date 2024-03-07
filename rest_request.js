function submitProblemData(uid, question, correct_ans1, user_ans1, remark) {
    return fetch('http://127.0.0.1:5000/math_challenge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UID: uid,
        QUESTION: question,
        CORRECT_ANS1: correct_ans1,
        USER_ANS1: user_ans1,
        REMARK: remark
      })
    })
  }


  function submitProblemDataMath(uid, question, correct_ans1,correct_ans2,correct_ans3,  user_ans1, user_ans2   , user_ans3, remark) {
    return fetch('http://127.0.0.1:5000/math_challenge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UID: uid,
        QUESTION: question,
        CORRECT_ANS1: correct_ans1,
        CORRECT_ANS2: correct_ans2,
        CORRECT_ANS3: correct_ans3,
        USER_ANS1: user_ans1,
        USER_ANS2: user_ans2,
        USER_ANS3: user_ans3,
        REMARK: remark
      })
    })
  }
