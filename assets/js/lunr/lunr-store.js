var store = [{
        "title": "Python中的  iter     reversed     next  ",
        "excerpt":"Python 中特殊方法的一些理解笔记 __reversed__ ​ 返回集合的倒叙迭代器,如果没有实现这个方法,reversed()会去使用__getitem__和__len__来实现 __next__ 和 __iter__ ​ 介绍 __next__ 和 __iter__ 方法需要了解下可迭代对象(iterable)和迭代器(iterator): __iterable__ ​ 如果对象实现了 __iter__ 方法,那么对象就是可迭代的。python中的序列都可以迭代。如果没有实现 __iter__ ,实现了 __getitem__ 方法,而且参数是从零开始的索引,这种对象也可以迭代。 __iterator__ ​ 标准的迭代器都有两个方法 ___next__ 和 __iter__: ​ __next__ 返回下一个可用的元素,如果没有元素了,抛出 StopIteration 异常 ​ __iter__ 返回self 迭代器和可迭代对象的关系 ​ python从可迭代对象中获取迭代器(可迭代对象—iter()—&gt;迭代器—next()—&gt;值) 代码示例 In [9]: a=(1,2,3) In [10]: type(a) Out[10]: tuple In...","categories": [],
        "tags": ["Python"],
        "url": "/python-iter-reversed-next/",
        "teaser": null
      }]
