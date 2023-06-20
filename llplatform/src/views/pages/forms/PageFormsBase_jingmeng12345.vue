<template>
  <div>
    <br />
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane class="Form" label="工单提交" name="first">
          <el-card shadow="hover">
            <el-form
              :model="ruleFormInput"
              :rules="rules"
              ref="ruleFormInput"
              label-width="100px"
            >
              <el-form-item label="工单详情" prop="name">
                <el-input v-model="ruleFormInput.name"></el-input>
              </el-form-item>
              <!-- <el-form-item label="问题场景" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                  <el-option label="客服" value="shanghai"></el-option>
                  <el-option label="12315" value="beijing"></el-option>
                </el-select>
              </el-form-item> -->
              <el-form-item label="处理时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="ruleFormInput.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">——————</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker
                      type="fixed-time"
                      placeholder="选择时间"
                      v-model="ruleFormInput.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <!-- <el-form-item label="问题来源" prop="type">
                <el-checkbox-group v-model="ruleFormInput.type">
                  <el-checkbox label="12345" name="type"></el-checkbox>
                  <el-checkbox label="东风通信" name="type"></el-checkbox>
                  <el-checkbox label="其他" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item> -->
              <el-form-item label="输入问题" prop="inputText">
                <el-input
                  v-model="ruleFormInput.inputText"
                  type="textarea"
                  placeholder="输入"
                  :autosize="{ minRows: 20, maxRows: 20 }"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleFormInput')"
                  >立即创建</el-button
                >
                <el-button @click="resetForm('ruleFormInput')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-tab-pane>
        <el-tab-pane class="Form" label="工单详情" name="second">
          <el-card shadow="hover">
            <el-form
              :model="ruleFormOutput"
              :rules="rules"
              ref="ruleFormOutput"
              label-width="120px"
            >
              <el-col :span="11">
                <el-form-item
                  label="市民姓名"
                  prop="userName"
                  :required="false"
                >
                  <el-input v-model="ruleFormOutput.userName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="联系方式" prop="phoneNumber">
                  <el-input v-model="ruleFormOutput.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="证件类型" prop="idCardType">
                  <el-input v-model="ruleFormOutput.idCardType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="证件号码" prop="idCardNumber">
                  <el-input v-model="ruleFormOutput.idCardNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="市民性别" prop="gender">
                  <el-radio-group v-model="ruleFormOutput.gender">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    <el-radio label="未知"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="工单类型" prop="ticketType">
                  <el-radio-group v-model="ruleFormOutput.ticketType">
                    <el-radio label="咨询"></el-radio>
                    <el-radio label="建议"></el-radio>
                    <el-radio label="求助"></el-radio>
                    <el-radio label="投诉"></el-radio>
                    <el-radio label="表扬"></el-radio>
                    <el-radio label="举报"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="是否回放" prop="isVisit">
                  <el-radio-group v-model="ruleFormOutput.isVisit">
                    <el-radio label="回访"></el-radio>
                    <el-radio label="不回访"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="紧急程度" prop="emergencyLevel">
                  <el-radio-group v-model="ruleFormOutput.emergencyLevel">
                    <el-radio label="一般"></el-radio>
                    <el-radio label="紧急"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="归属地" prop="poisition">
                  <el-input v-model="ruleFormOutput.poisition"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="诉求地址" prop="poisitionInfo">
                  <el-input v-model="ruleFormOutput.poisitionInfo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="18">
              <el-form-item label="工单标题" prop="title">
                <el-input
                  v-model="ruleFormOutput.title"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 2 }"
                ></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="18">
              <el-form-item label="诉求内容" prop="content">
                <el-input
                  v-model="ruleFormOutput.content"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 2 }"
                ></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="18">
              <el-form-item label="诉求目的" prop="dealGoal">
                <el-input
                  v-model="ruleFormOutput.dealGoal"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 2 }"
                ></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="诉求归口" prop="contentType">
                  <el-input v-model="ruleFormOutput.contentType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="处理方式" prop="dealType">
                  <el-input v-model="ruleFormOutput.dealType"></el-input>
                </el-form-item>
              </el-col>
               <el-col :span="18">
                <el-form-item label="处理过程及结果" prop="dealResult">
                  <el-input v-model="ruleFormOutput.dealResult"
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 3}"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="责任单位" prop="responsibleDp">
                  <el-input v-model="ruleFormOutput.responsibleDp"></el-input>
                </el-form-item>
              </el-col>
                 <el-col :span="11">
                <el-form-item label="回访情况" prop="visitInfo">
                  <el-input v-model="ruleFormOutput.visitInfo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否满意(不满意原因)" prop="isArgee">
                  <el-input v-model="ruleFormOutput.isArgee"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="18">
              <el-form-item>
                <el-button @click="resetForm('ruleFormOutput')">重置</el-button>
              </el-form-item>
              </el-col>
            </el-form>
          </el-card>
        </el-tab-pane>
        
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "PageFormsBase",
  data() {
    const generateData2 = () => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu",
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    return {
      activeName: "first",
      ruleFormInput: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        inputText: ""
       
      },
      ruleFormOutput: {
        userName: "",
        phoneNumber: "",
        idCardType:"",
        idCardNumber:"",
        gender:"",
        poisition:"",
        poisitionInfo:"",
        title:"",
        content:"",
        contentType:"",
        dealType:"",
        dealGoal:"",
        ticketType:"",
        isVisit:"",
        emergencyLevel:"",
        dealResult:"",
        responsibleDp:"",
        visitInfo:"",
        isArgee:"",
        
      },
      ruleFormOutputType2: {
        ticketTitleType2:"",
        contentType2:"",
        goal:"",
        ticketType2:"",
        isVisitType2:"",
        emergencyLevelType2:"",
        carNumber:"",
        
      },
      // resultData: {

      // },
      resultData:
      {客户姓名:"", 
      联系方式:"",
      客户性别:"",
      证件类型:"", 
      证件号码:"", 
      客户性别:"", 
      工单类型:"", 
      是否回访:"", 
      紧急程度:"", 
      归属地名称:"", 
      区县名称:"", 
      诉求地址:"", 
      诉求归口:"", 
      工单标题:"", 
      诉求内容:"", 
      诉求目的:"", 
      处理方式:"",
      处理过程及结果:"",
      责任单位:"",
      回访情况:"",
      是否满意:""
      },
      resultDataType2:
      {工单类型2:"", 
      是否回访2:"", 
      紧急程度2:"", 
      工单标题2:"", 
      诉求内容2:"", 
      诉求目的2:"", 
      车牌底盘号:""},
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 40, message: "长度在 3 到 40 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        inputText: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        carNumber: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        ticketType: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        emergencyLevel: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        emergencyLevelType2: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        ticketType2: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        userName: [{required:true }],
        phoneNumber:[{required:true}],
        // gender:[{required:true}],
        // ticketType:[{required:true}],
        // isVisit:[{required:true}],
        // emergencyLevel:[{required:true}],
        poisition:[{required:true}],
        poisitionInfo:[{required:true}],
        title:[{required:true}],
        content:[{required:true}],
        contentType:[{required:true}],
        dealType:[{required:true}],
        dealGoal:[{required:true}],
      },
      
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
    };
  },
  methods: {
    submitForm(formName) {
      // this.convertData();
      this.postData();
      // clearTimeout(this.timer);  //清除延迟执行 
      // this.timer = setTimeout(()=>{   //设置延迟执行
      //   this.convertData();
      //   console.log("success")
      // },10000);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("提交成功");
        } else {
          // console.log("提交失败");
          alert("提交失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
       
    },
    convertData(resultData){
      console.log("resultData",resultData.客户姓名)
      this.ruleFormOutput.userName = resultData.客户姓名
      this.ruleFormOutput.phoneNumber = resultData.联系方式
      this.ruleFormOutput.idCardType = resultData.证件类型
      this.ruleFormOutput.idCardNumber = resultData.证件号码
      this.ruleFormOutput.poisition = resultData.归属地名称
      this.ruleFormOutput.poisitionInfo = resultData.归属地名称
      this.ruleFormOutput.title = resultData.工单标题
      this.ruleFormOutput.content = resultData.诉求内容
      this.ruleFormOutput.dealGoal = resultData.诉求目的
      this.ruleFormOutput.dealType = resultData.处理方式
      this.ruleFormOutput.contentType = resultData.诉求归口
      this.ruleFormOutput.ticketType = resultData.工单类型
      this.ruleFormOutput.gender = resultData.客户性别
      this.ruleFormOutput.isVisit = resultData.是否回访
      this.ruleFormOutput.emergencyLevel = resultData.紧急程度
      this.ruleFormOutput.dealResult = resultData.处理过程及结果
      this.ruleFormOutput.responsibleDp = resultData.责任单位
      this.ruleFormOutput.visitInfo = resultData.回访情况
      this.ruleFormOutput.isArgee = resultData.是否满意
    },
     async postData(){
       await axios.post(('/api/index/jingmeng'),this.ruleFormInput)
                    .then((result) => {
                    this.resultData = JSON.parse(result.data)
                    this.convertData(this.resultData);
                    console.log("********荆门工单详情**********",this.ruleFormOutput)
                    })
                    .catch((err) => {console.log(err)})

    },
    beforeRemove(file, fileList) {
      return this.$confirm("确定移除 " + file.name + "}？");
    },
  },
};
</script>

<style scoped>
.Form {
  width: 70%;
  height: 80%;
}
</style>
