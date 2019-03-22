import Button from './src/button/button'
import Icon from './src/icon'
import ButtonGroup from './src/button/button-group'
import Input from './src/input'
import Col from './src/grid/col'
import Row from './src/grid/row'
import Layout from './src/layout/layout'
import Header from './src/layout/header'
import Sider from './src/layout/sider'
import Content from './src/layout/content'
import Footer from './src/layout/footer'
import Toast from './src/toast/toast'
import Plugin from './src/toast/plugin'
import Tabs from './src/tabs/tabs'
import TabsHead from './src/tabs/tabs-head'
import TabsBody from './src/tabs/tabs-body'
import TabsItem from './src/tabs/tabs-item'
import TabsPane from './src/tabs/tabs-pane'
import Popover from './src/popover'
import Collapse from './src/collapse/collapse'
import CollapseItem from './src/collapse/collapse-item'


const components = [
    Icon,
    Button,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Sider,
    Content,
    Footer,
    Toast,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse,
    CollapseItem,
]

const install = Vue => {
    components.forEach(component => {
        component.install(Vue)
    })
    Vue.use(Plugin)
}
export {
    Icon,
    Button,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Sider,
    Content,
    Footer,
    Toast,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse,
    CollapseItem,
};
export default {install, Plugin}
