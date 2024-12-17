import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/FontAwesome6';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel-v4';
import PageControl from 'react-native-page-control';
import {useNavigation} from '@react-navigation/native';
const PostDetail = () => {
  const {width, height} = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const [comment, setComment] = useState('');
  const navigation = useNavigation();
  const images = [
    {
      id: '1',
      source: {
        uri: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg',
      },
    },
    {
      id: '2',
      source: {
        uri: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg',
      },
    },
    {
      id: '3',
      source: {
        uri: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg',
      },
    },
    {
      id: '4',
      source: {
        uri: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg',
      },
    },
  ];

  const renderItem = ({item}) => (
    <View
      key={item.id}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        height: height * 0.4, // Chiều cao của carousel
        marginBottom: 10,
      }}>
      <Image
        source={item.source}
        style={{width: '100%', height: '100%', borderRadius: 10}}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* list bài viết */}
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
        }}>
        {/* User information */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-ios" // Thay đổi biểu tượng mắt tùy thuộc vào trạng thái showPassword
              size={18}
              color="black"
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://files.exam24h.com/upload/2024/12/16_1734328856413/66433168c7b6d22d3824e6a4/460714923_1943489279453139_3511561591442451070_n%20%281%29.jpg',
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 600}}>
              Nguyễn Chí Nghĩa
              <Icon name="verified" size={17} color="#3964FF" />
            </Text>
            <Text style={{color: 'gray'}}>
              @chinghia *{' '}
              <Text style={{textDecorationLine: 'underline'}}>2 giờ</Text>
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 10,
              justifyContent: 'center',
            }}>
            <Icon name="more-horiz" size={20} color="black" />
          </View>
        </View>

        {/* Image Carousel */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width * 0.94}
            layout="default"
            loop={true}
            autoplay={true}
            autoplayInterval={3000}
            onSnapToItem={index => setActiveIndex(index)}
          />
          <PageControl
            numberOfPages={images.length}
            currentPage={activeIndex}
            hidesForSinglePage={true}
            onPageSelect={page => setActiveIndex(page)}
            indicatorStyle={{borderRadius: 5}}
            currentIndicatorStyle={{
              borderRadius: 24,
              width: 24,
              height: 8,
            }}
            indicatorSize={{width: 8, height: 8}}
            pageIndicatorTintColor={'gray'}
            currentPageIndicatorTintColor={'#FDD3D0'}
          />
        </View>

        {/* Interaction Section */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: 16}}>
              <Icons name="hearto" size={16} /> 11k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 16}}>
              <Iconsss name="comment-text-outline" size={16} /> 55k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 16}}>
              <Iconss name="share" size={16} /> 11k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 16}}>
              <Iconsss name="google-analytics" size={16} /> 55k
            </Text>
          </TouchableOpacity>
        </View>

        {/* Post Description */}
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 15}}>
            Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng
            châu thổ sông Hồng ở miền bắc Việt Nam.
          </Text>
        </View>
      </View>
      {/* Comment Section */}
      <View style={styles.commentContainer}>
        <Image
          source={{
            uri: 'https://files.exam24h.com/upload/2024/12/16_1734328856413/66433168c7b6d22d3824e6a4/460714923_1943489279453139_3511561591442451070_n%20%281%29.jpg',
          }}
          style={styles.avatar}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập bình luận..."
          value={comment}
          onChangeText={setComment}
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={{marginRight: 10}}>
            <Iconss name="smile" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Iconss name="images" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  iconsContainer: {
    flexDirection: 'row',

    marginLeft: 10,
  },
});

export default PostDetail;
