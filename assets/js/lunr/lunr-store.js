var store = [{
        "title": "docker 入门 -- 01",
        "excerpt":"了解什么是容器,如何管理容器和镜像,了解docker网络 初始化一台主机 virt-install --name docker --ram 4096 --vcpus=4 --os-type=linux --accelerate --cdrom=/home/kvm/CentOS-7.5-x86_64-Minimal-1804.iso --disk path=/home/kvm/docker.qcow2,size=30,format=qcow2,bus=ide --bridge=virbr0 --vnc --vncport=60009 --vnclisten=0.0.0.0 主机名称 IP地址 docker 192.168.122.100 systemctl stop firewalld systemctl disable firewalld sed -i 's/enforcing/disabled/' /etc/selinux/config setenforce 0 swapoff -a sed -ri 's/.*swap.*/#&amp;/' /etc/fstab yum install ntpdate vim wget -y ntpdate time.windows.com hostnamectl set-hostname docker...","categories": [],
        "tags": ["Docker"],
        "url": "/docker-01/",
        "teaser": null
      },{
        "title": "`Python中的 __iter__ __reversed__ __next__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 __reversed__说明 返回集合的倒叙迭代器,如果没有实现这个方法,reversed()会去使用__getitem__和__len__来实现 特殊方法__next__和__iter__说明 介绍__next__和__iter__方法需要了解下可迭代对象(iterable)和迭代器(iterator): iterable 如果对象实现了__iter__方法,那么对象就是可迭代的。python中的序列都可以迭代。如果没有实现__iter__,实现了__getitem__方法,而且参数是从零开始的索引,这种对象也可以迭代。 iterator 标准的迭代器都有两个方法___next__和__iter__: __next__返回下一个可用的元素,如果没有元素了,抛出 StopIteration 异常 __iter__返回self code python从可迭代对象中获取迭代器(可迭代对象—iter()—&gt;迭代器—next()—&gt;值) In [9]: a=(1,2,3) In [10]: type(a) Out[10]: tuple In [11]: b=iter(a) In [12]: type(b) Out[12]: tuple_iterator In [13]: a=[1,2,3] In [14]: type(a) Out[14]: list In [15]: b=iter(a) In [16]: type(b) Out[16]: list_iterator In [20]:...","categories": [],
        "tags": ["Python"],
        "url": "/python-iter-reversed-next/",
        "teaser": null
      },{
        "title": "Centos Prometheus 安装",
        "excerpt":"Prometheus 在centos中的安装记录 下载 cd /tmp wget https://github.com/prometheus/prometheus/releases/download/v2.37.0/prometheus-2.37.0.linux-amd64.tar.gz 解压 tar zxvfp prometheus-2.37.0.linux-amd64.tar.gz mv prometheus-2.37.0.linux-amd64 /usr/local/ mkdir /data/config/oss/prometheus cd /usr/local/ ln -s prometheus-2.37.0.linux-amd64 prometheus cd prometheus mv prometheus.yml /data/config/oss/prometheus/ mkdir /data/prometeus mv data /data/prometeus/ 启动文件 cat &lt;&lt; 'EOF' | sudo tee /etc/systemd/system/prometheus.service [Unit] Description=Prometheus Server Documentation=https://prometheus.io/docs/introduction/overview/ After=network-online.target [Service] User=root ExecStart=/usr/local/prometheus/prometheus --config.file=/data/config/oss/prometheus/prometheus.yml --storage.tsdb.path=/data/prometeus/data...","categories": [],
        "tags": ["Application"],
        "url": "/install-prometheus/",
        "teaser": null
      },{
        "title": "`Python中的 __new__ __init__ __del__`",
        "excerpt":"Python中的__new__ __init__ __del__三个方法用于实例的创建和销毁,在使用python的类中，我们最常用的是__init__方法，通常称为构造方法,__new__方法几乎不会使用，这篇文章是基于Python3.6为基础来做实验，主要谈一谈python的__new__和__init__，__init__通常称为构造方法,但其实它是个“初始化方法”，真正的构造方法是__new__,__init__既然是初始化方法，那么肯定是对对象的初始化，也就是存在一个被初始化的对象 第一个例子 class inch(): def __init__(self): print(\"__init__\") def __new__(cls): print(\"__new__ \") print(\"__new__ \") __new__ None 因为我们没有从__new__返回任何结果，__init__这里不会调用。如果init被调用，我们就会看到我们在init中的打印语句。 第二个例子 class inch(): def __new__(cls): print(\"__new__ \") print(super(inch, cls).__new__(cls)) return super(inch, cls).__new__(cls) def __init__(self): print(\"__init__\") print(inch()) __new__ &lt;__main__.inch object at 0x002BF170&gt; __init__ &lt;__main__.inch object at 0x002BF170&gt; 用于构建实例的是特殊方法 new：是个类方法(不需要使用@classmethod)，调用__init__方法时要传入实例，__new__必须返回一个实例。返回的实例会作为第一个参数（即 self）传给__init__ 方法。注意:__init__不允许返回任何值 第三个例子 class...","categories": [],
        "tags": ["Python"],
        "url": "/python_new_init_del/",
        "teaser": null
      }]
