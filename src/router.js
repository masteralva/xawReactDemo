import  React from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Admin from './Admin';
import Login from './pages/login'
import Home from "./pages/home";
import CourseCategory from "./pages/cousrseOverview/courseCategory";
import CourseManage from "./pages/cousrseOverview/courseManage";
import ClassList from "./pages/classOverview/classList";
import CreateNewClass from "./pages/classOverview/classList/createNewClass";
import CreateNewCourse from "./pages/cousrseOverview/courseManage/createNewCourse";
import ArrangeClassManage from "./pages/classOverview/arrangeClassManage";
import ChooseTeacher from "./pages/classOverview/arrangeClassManage/chooseTeacher";
import CoursePayment from "./pages/cousrseOverview/coursePayment";
import CloudDisk from "./pages/cloudDisk";
import AvailableTime from "./pages/availableTime";
import StudentList from './pages/studentOverview/studentList'
import TeacherList from './pages/teacherOverview/teacherList'
import TeachingTimeRecord from './pages/teacherOverview/teachingTimeRecord'
import AgentList from './pages/agent/agentList'
import Permission from './pages/permission'
import SetProperty from "./pages/cousrseOverview/setProperty"
import SetPrice from "./pages/cousrseOverview/setPrice"
import SetPricePage from "./pages/cousrseOverview/setPrice/setPrice"
import ShowPrice from "./pages/cousrseOverview/setPrice/showPrice"
import UIbuttons from "./pages/ui/buttons";
import UImodals from "./pages/ui/modals";
import UIloadings from "./pages/ui/loadings";
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import NoMatch from "./pages/nomatch/page404";
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import Resume from './pages/resume'
import editResume from './pages/resume/editResume'
import Setting from './pages/setting'
export default class IRouter extends React.Component{
    render () {
        return(
            <HashRouter>
                <App>
                    <Switch>
                        {/*admin的同级路由*/}
                        <Route path="/NoMatch" component={NoMatch}/>
                        <Route path="/login" component={Login}/>
                        {/*需要先渲染admin组件的嵌套路由*/}
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route exact path="/setPrice" component={SetPrice} />
                                    <Route path="/setPrice/setPricePage" component={SetPricePage} />
                                    <Route path="/setPrice/showPrice" component={ShowPrice} />

                                    <Route path="/setProperty" component={SetProperty} />
                                    <Route  path='/admin' component={Home}/>
                                    <Route  path='/courseCategory' component={CourseCategory}/>
                                    <Route  path='/courseManage' component={CourseManage}/>
                                    <Route  path='/createNewCourse' component={CreateNewCourse}/>
                                    <Route  path='/coursePayment' component={CoursePayment}/>
                                    <Route  path='/classList' component={ClassList}/>
                                    <Route  path='/createNewClass' component={CreateNewClass}/>
                                    <Route  path='/arrangeClassManage' component={ArrangeClassManage}/>
                                    <Route  path='/chooseTeacher' component={ChooseTeacher}/>
                                    <Route  path='/availableTime' component={AvailableTime}/>
                                    <Route  path='/studentList' component={StudentList}/>
                                    <Route  path='/teacherList' component={TeacherList}/>
                                    <Route  path='/teachingTimeRecord' component={TeachingTimeRecord}/>
                                    <Route  path='/agentList' component={AgentList}/>
                                    <Route  path='/permission' component={Permission}/>
                                    <Route  path='/cloudDisk' component={CloudDisk}/>
                                    <Route  path="/ui/notification" component={Notice} />
                                    <Route  path="/ui/messages" component={Messages} />
                                    <Route  path="/ui/tabs" component={Tabs} />
                                    <Route  path="/ui/gallery" component={Gallery} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path="/resume/view" component={Resume} />
                                    <Route path="/resume/edit" component={editResume} />
                                    <Route path="/setting" component={Setting} />


                                    {/*<Redirect to="/NoMatch" />*/}
                                </Switch>
                            </Admin>
                        }/>

                        <Route component={NoMatch}/>

                    </Switch>
                </App>
            </HashRouter>
        )
    }
}