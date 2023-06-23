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
                <el-form-item label="问题分类" prop="ticketMode">
                  <el-radio-group v-model="ruleFormOutput.ticketMode">
                    <el-radio label="咨询"></el-radio>
                    <el-radio label="法律援助"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="问题类型" prop="ticketType">
                  <el-radio-group v-model="ruleFormOutput.ticketType">
                    <el-radio label="民事"></el-radio>
                    <el-radio label="刑事"></el-radio>
                    <el-radio label="行政"></el-radio>
                    <el-radio label="其他"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="咨询内容" prop="content">
                  <el-input 
                     v-model="ruleFormOutput.content"
                     type="textarea"
                     :autosize="{ minRows: 3, maxRows: 3}"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="回复要点" prop="contentInfo">
                  <el-input 
                      v-model="ruleFormOutput.contentInfo"
                      type="textarea"
                      :autosize="{ minRows: 4, maxRows: 4}"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="引导向其他渠道求助" prop="dealType">
                  <el-radio-group v-model="ruleFormOutput.dealType">
                    <el-radio label="否"></el-radio>
                    <el-radio label="110"></el-radio>
                    <el-radio label="12345"></el-radio>
                    <el-radio label="法律援助咨询电话"></el-radio>
                    <el-radio label="其他热线电话"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="所属地区" prop="position">
                  <el-input v-model="ruleFormOutput.position"></el-input>
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
  name: "PageFormsBase_shiyan12345",
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
        ticketMode:"",
        ticketType:"",
        poisition:"",
        content:"",
        contentInfo:"",
        dealType:"",
      },
      resultData:
      {问题分类:"", 
      问题类型:"",
      咨询内容:"",
      回复要点:"", 
      引导向其他渠道求助:"",
      所属地区:""
      },
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
      console.log("-------resultData------",resultData)
      this.ruleFormOutput.ticketMode = resultData.问题分类
      this.ruleFormOutput.ticketType = resultData.问题类型
      this.ruleFormOutput.content = resultData.咨询内容
      this.ruleFormOutput.contentInfo = resultData.回复要点
      this.ruleFormOutput.dealType = resultData.引导向其他渠道求助
      this.ruleFormOutput.poisition = resultData.所属地区
      
    },
     async postData(){
       await axios.post(('/api/index/12348'),this.ruleFormInput)
                    .then((result) => {
                    this.resultData = JSON.parse(result.data)
                    this.convertData(this.resultData);
                    console.log("********12348工单详情**********",this.ruleFormOutput)
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
