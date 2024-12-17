// PostItem.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import PageControl from 'react-native-page-control';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const PostItem = React.memo(({item}) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
        uri: 'https://anhnail.com/wp-content/uploads/2024/10/Hinh-gai-xunh-Han-Quoc-toc-dai.jpg',
      },
    },
    {
      id: '3',
      source: {
        uri: 'https://anhnail.com/wp-content/uploads/2024/10/Hinh-gai-xinh-Han-Quoc.jpg',
      },
    },
    {
      id: '4',
      source: {
        uri: 'https://anhnail.com/wp-content/uploads/2024/10/Hinh-gai-xinh-Han-Quoc-toc-ngan-lanh-lung.jpg',
      },
    },
  ];
  const renderCarouselItem = ({item}) => (
    <View style={styles.carouselItem}>
      <Image
        source={item.source}
        style={styles.carouselImage}
        resizeMode="cover"
      />
    </View>
  );
  const navigation = useNavigation();

  const handlePostDetail = () => {
    navigation.navigate('PostDetail');
  };
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{uri: item.photoUrl}} style={styles.avatar} />
        <View>
          <Text style={styles.username}>
            {item.name} <Icon name="verified" size={17} color="#3964FF" />
          </Text>
          <Text style={styles.timestamp}>
            @{item.school} *{' '}
            <Text style={styles.underline}>{item.birthday}</Text>
          </Text>
        </View>
        <View style={styles.moreIcon}>
          <Icon name="more-horiz" size={20} color="black" />
        </View>
      </View>

      <TouchableOpacity
        onPress={handlePostDetail}
        style={styles.carouselContainer}>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
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
          currentIndicatorStyle={{borderRadius: 24, width: 24, height: 8}}
          indicatorSize={{width: 8, height: 8}}
          pageIndicatorTintColor="gray"
          currentPageIndicatorTintColor="#FDD3D0"
        />
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Text style={styles.actionText}>
            <Icons name="hearto" size={16} /> 11k
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>
            <Iconsss name="comment-text-outline" size={16} /> 55k
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>
            <Iconss name="share" size={16} /> 11k
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>
            <Iconsss name="google-analytics" size={16} /> 55k
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
  },
  timestamp: {
    color: 'gray',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  moreIcon: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: height * 0.45,
    marginBottom: 10,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionText: {
    fontSize: 16,
  },
});

export default PostItem;
