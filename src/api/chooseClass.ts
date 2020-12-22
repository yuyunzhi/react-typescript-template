import Axios from './axios'

class ChooseClass {
  // 获取学生列表class
  getStudentList() {
    return Axios.get(`/api/xxx/xxx/xxx/xxx/xxx`)
  }

}

export default new ChooseClass()
