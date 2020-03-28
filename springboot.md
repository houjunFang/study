# SpringBoot配置特定属性spring.profiles


1. springboot默认配置文件名为application.properties,可通过配置文件中使用spring.profiles.active=xxx来激活启用类加载目录下名为application-{xxx}.properties文件或通过启动时--spring.profiles.active=xxx 来指定;
2. 配置文件的加载都是以先后叠加方式加载，即先加载的文件中已存在的属性会被后加载的覆盖；
3. spring.profiles.include=aa,bb 无条件加载激活配置文件application-aa.properties及application-bb.properties

可以通过如下方式启动可运行jar时指定配置及服务端口
>java -jar app.jar --spring.profiles.active=dev --server.port=8060  //指定端口

可以通过如下方式使用配置文件属性值如下：
~~~java
@Component
public class AppConfig{

    @Value("${xx.xxx.name}")
    private String name;

    //TODO ....


}
~~~

