version: 0.0.4

# devTip
## index
+ 1.0 info
+ 2.0 usage
+ 3.0 updates
+ 4.0 todo

## 1.0 info
simple tooltip plugin for jquery

## 2.0 usage
$('.test').devTip();


just add the class to any element such as span, a, div etc.

eg:


```
<a 
    class="test" 
    title="this going to text for the tips" 
    rel="if any images is used attach here in rel, only the url is needed eg:http://test.com/img.jpg"
>Hover over me</a>
```

### options:


## 3.0 updates
+ 0.0.5  # add viewport recognition, tooltip auto flips if at right edge
+ 0.0.4  # fix if rel == null
+ 0.0.3  # add image support
+ 0.0.2  # convert to plugin
+ 0.0.1  # initialize

## 4.0 todo
+ add bottom-right, top-left, top-right stylesheet
+ add thumbnails only tooltip
