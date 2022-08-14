var store = [{
        "title": "docker 入门01",
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
      }]
