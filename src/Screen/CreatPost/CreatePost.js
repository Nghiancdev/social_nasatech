import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';

const PRIVACY_OPTIONS = [
  {id: 1, label: '🌐 Công khai'},
  {id: 2, label: '🔒 Chỉ mình tôi'},
];

const CreatePostScreen = () => {
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState(PRIVACY_OPTIONS[0]);

  const navigation = useNavigation();
  const route = useRoute();

  // Hàm callback truyền từ màn hình danh sách
  const {addNewPost} = route.params;

  const pickImage = () => {
    setImage('https://via.placeholder.com/150'); // Giả lập chọn ảnh
  };

  const openPrivacyModal = () => setModalVisible(true);

  const selectPrivacyOption = option => {
    setSelectedPrivacy(option);
    setModalVisible(false);
  };

  const handlePost = () => {
    const newPost = {
      _id: Date.now().toString(),
      name: 'Nguyễn Chí Nghĩa',
      school: postContent,
      birthday: 'New',
      photoUrl:
        'https://files.exam24h.com/upload/2024/12/16_1734328856413/66433168c7b6d22d3824e6a4/460714923_1943489279453139_3511561591442451070_n%20%281%29.jpg',
      image: '',
      imageSchool:
        'https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png',
      damageType: 'Explosive',
    };

    // Gọi callback để thêm object mới vào danh sách
    addNewPost(newPost);

    // Quay lại màn hình danh sách
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.tabar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="close" size={28} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '500'}}>Tạo bài viết</Text>
        <Icons name="close" size={28} color="#fff" />
      </View>

      {/* User Info */}
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://files.exam24h.com/upload/2024/12/16_1734328856413/66433168c7b6d22d3824e6a4/460714923_1943489279453139_3511561591442451070_n%20%281%29.jpg',
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>
            Nguyễn Chí Nghĩa <Icons name="verified" size={17} color="#3964FF" />
          </Text>
          <TouchableOpacity onPress={openPrivacyModal}>
            <Text style={styles.postPrivacy}>{selectedPrivacy.label}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Text Input */}
      <TextInput
        style={styles.textInput}
        placeholder="Hãy viết gì đó cho hôm nay"
        multiline
        value={postContent}
        onChangeText={setPostContent}
      />

      {/* Image Picker */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <Icon name="camera-outline" size={24} color="#FF6600" />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <Icon name="images-outline" size={24} color="#FF6600" />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          postContent.length === 0 && styles.disabledButton,
        ]}
        disabled={postContent.length === 0}
        onPress={handlePost}>
        <Text style={styles.submitButtonText}>Đăng</Text>
      </TouchableOpacity>

      {/* Privacy Modal */}
      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={PRIVACY_OPTIONS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => selectPrivacyOption(item)}>
                  <Text style={styles.modalOptionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabar: {
    justifyContent: 'space-around',

    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  postPrivacy: {
    fontSize: 12,
    color: '#1877F2',
  },
  textInput: {
    flex: 1,
    minHeight: 120,
    fontSize: 16,
    textAlignVertical: 'top',
    marginVertical: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  iconButton: {
    padding: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#A0A0A0',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
  },
  closeModalText: {
    textAlign: 'center',
    color: '#FF0000',
    marginTop: 10,
    fontSize: 16,
  },
});

export default CreatePostScreen;
