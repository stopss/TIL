## API
#### **API(Application Programming Interface, 응용 프로그래밍 인터페이스)**?
: 응용 프로그램에서 사용할 수 있도록 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻합니다.
쉽게 말해,
어떠한 응용 프로그램에서 데이터를 주고 받기 위한 방법을 의미합니다. 요청을 받아 로직을 수행하고 응답을 내놓는 프로그래밍된 무언가를 말합니다.  
</br></br>


## REST
#### **REST(Representational State Transfer)?**
: 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미
1. HTTP URL를 통해 자원을 명시하고
2. HTTP Method(POST, GET, PUT, PATCH, DELETE 등)을 통해
3. 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미   
</br>

#### REST 구성 요소
* 자원: HTTP URL
* 자원에 대한 행위 : HTTP Method
* 자원에 대한 행위의 내용(표현) : HTTP Message Pay Load  
</br>

#### REST의 특징
* Server-Cleint 구조
* Stateless (무상태성)
* Cacheable (캐시 처리 가능)
* Layered System (계층형 구조)
* Uniform Interface (인터페이스 일관성)   
</br></br>

## REST API
#### **REST API란**
: REST의 원리를 따르는 API를 의미합니다.  
</br>

#### REST API 설계시 주의할 점
1. URL는 동사보다는 명사를, 대문자보다는 소문자를 사용
2. 마지막에 슬래시(/)를 포함하지 않음
3. 언더바(_) 대신 하이픈(-)을 사용
4. 파일 확장자는 URL에 포함하지 않음
5. 행위를 포함하지 않음   
</br></br>
