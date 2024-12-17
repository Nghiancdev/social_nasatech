import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/FontAwesome6';
import HorizontalTabs from '../../components/HorizontalTabs';
import HorizontalButtonScroll from '../../components/HorizontalButtonScroll';

import axios from 'axios';
import PostItem from '../../components/PostItem';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {width, height} = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://api-blue-archive.vercel.app/api/characters?page=${page}`,
        );
        const data = response.data.data;
        setUsers(prevUsers => [...prevUsers, ...data]);
        // setUsers(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" />;
  }

  if (error) {
    return <Text style={styles.error}>Lỗi: {error}</Text>;
  }

  const handleEndReached = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1); // Tăng số trang để tải thêm dữ liệu
    }
  };
  const addNewPost = newPost => {
    setUsers(prevData => [newPost, ...prevData]); // Thêm vào đầu mảng
  };

  const buttons = [
    {label: 'Phát trực tiếp', icon: 'video-camera-back', iconColor: '#30E0A1'},
    {label: 'Vị Trí', icon: 'location-pin', iconColor: '#32AE60'},
    {label: 'Vị Trí', icon: 'settings', iconColor: '#8981DA'},
    {label: 'Cảm xúc', icon: 'favorite', iconColor: '#24BEAC'},
  ];

  const tabs = [
    {
      label: 'Bài viết',
      content: (
        <View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: '#fff',
              paddingHorizontal: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 15}}>
              Bài Viết của bạn
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1.5}}>
                <Image
                  source={{
                    uri: 'https://files.exam24h.com/upload/2024/12/16_1734328856413/66433168c7b6d22d3824e6a4/460714923_1943489279453139_3511561591442451070_n%20%281%29.jpg',
                  }}
                  style={styles.imageAvtar2} // URL hình ảnh
                />
              </View>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreatePost', {
                    addNewPost: newPost => {
                      setUsers(prevData => [newPost, ...prevData]); // Thêm vào đầu mảng
                    },
                  })
                }
                style={{flex: 6}}>
                <Text style={{color: 'gray', fontWeight: 600, fontSize: 20}}>
                  Bạn đang nghĩ gì
                </Text>
              </TouchableOpacity>
              <View style={{flex: 1}}>
                <Iconss name="images" size={20} color="gray" />
              </View>
            </View>
            <HorizontalButtonScroll
              buttons={buttons}
              //   onPress={handlePress}
            />
          </View>

          <FlatList
            data={users}
            keyExtractor={item => item._id}
            renderItem={({item}) => <PostItem item={item} />}
            nestedScrollEnabled
            onEndReached={handleEndReached} // Gọi hàm khi cuộn đến cuối
            onEndReachedThreshold={0.8} // Kích hoạt khi cuộn đến 50% cuối
            ListFooterComponent={
              loading ? <ActivityIndicator size="large" /> : null
            } // Hiển thị loader khi đang tải dữ liệu
          />
        </View>
      ),
    },
    {
      label: 'Ảnh',
      content: <Text style={styles.contentText}>Nội dung Ảnh</Text>,
    },
    {
      label: 'Video',
      content: <Text style={styles.contentText}>Nội dung Video</Text>,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon
            name="arrow-back-ios" // Thay đổi biểu tượng mắt tùy thuộc vào trạng thái showPassword
            size={18}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: 500}}>Nguyễn Chí Nghĩa</Text>
        <Icon
          name="arrow-back-ios" // Thay đổi biểu tượng mắt tùy thuộc vào trạng thái showPassword
          size={25}
          color="#ffff"
        />
      </View>

      <FlatList
        data={[{key: 'profile'}]}
        renderItem={() => (
          <>
            <View style={styles.banner}>
              <Image
                source={{
                  uri: 'https://png.pngtree.com/thumb_back/fw800/background/20240625/pngtree-tree-on-gray-background-image_15824638.jpg',
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.bannerBottom}>
              <View style={styles.countFriend}>
                <Text style={{fontWeight: 700}}>
                  700K{' '}
                  <Text style={{color: 'gray', fontWeight: 500}}>Bạn bè</Text>{' '}
                </Text>
                <Text style={{fontWeight: 700}}>
                  700K{' '}
                  <Text style={{color: 'gray', fontWeight: 500}}>
                    Người theo dõi
                  </Text>{' '}
                </Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CreatePost', {
                      addNewPost: newPost => {
                        setUsers(prevData => [newPost, ...prevData]); // Thêm vào đầu mảng
                      },
                    })
                  }
                  style={styles.button1}>
                  <Text style={styles.buttonText}>
                    <Icons name="plus" size={18} color="white" /> Thêm tin
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                  <Text style={styles.buttonText2}>Chỉnh sử trang cá nhân</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.avatar}>
                <Image
                  source={{
                    uri: 'https://files.exam24h.com/upload/2024/12/16_1734328856413/66433168c7b6d22d3824e6a4/460714923_1943489279453139_3511561591442451070_n%20%281%29.jpg',
                  }}
                  style={styles.imageAvtar}
                />
              </View>
              <View style={styles.name}>
                <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 5}}>
                  Nguyễn Chí Nghĩa
                  <Icon name="verified" size={17} color="#3964FF" />
                </Text>
                <Text style={{color: '#4D5761', fontWeight: 300}}>
                  contact.chinghia@gmail.com
                </Text>
              </View>
            </View>
            <HorizontalTabs tabs={tabs} />
          </>
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  tabar: {
    justifyContent: 'space-around',

    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 150,
    // resizeMode: 'contain',
  },
  banner: {
    height: 150,
  },
  bannerBottom: {
    height: 130,
    backgroundColor: '#fff',
  },
  countFriend: {
    paddingHorizontal: 50,
    paddingTop: 40,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  button1: {
    backgroundColor: '#3864FF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  button2: {
    borderWidth: 2,
    borderColor: '#F4F4F6',
    backgroundColor: '#FAFAFB',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText2: {
    color: '#4D5761',
    fontSize: 18,
    textAlign: 'center',
  },
  info: {
    borderWidth: 2,
    borderColor: '#3864FF',
    position: 'relative',
    top: -185,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4}, // Bóng đổ xuống dưới
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  avatar: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 15,
  },
  imageAvtar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  imageAvtar2: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    justifyContent: 'center',
  },
});

export default Profile;
