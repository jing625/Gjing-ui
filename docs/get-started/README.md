---
title: 快速上手
---

# 引入

```
import {Button,Icon} from 'gjing-ui'
import 'gjing-ui/dist/index.css'
export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
# 特别提醒
使用本框架前，需要使用border-box盒模型，否则会影响样式。
```
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
