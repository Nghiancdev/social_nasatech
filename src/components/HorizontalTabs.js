import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HorizontalTabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <View style={styles.container}>
      {/* Thanh tab */}
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.label}
            style={[
              styles.tabItem,
              activeTab === tab.label && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab.label)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab.label && styles.activeTabText,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Nội dung tab */}
      <View style={styles.contentContainer}>
        {tabs.find(tab => tab.label === activeTab)?.content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -70,
    // borderWidth: 1,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
  },
  tabItem: {
    paddingVertical: 10,
    width: '20%',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3b5998', // Màu xanh Facebook
  },
  activeTabText: {
    color: '#3b5998',
    fontWeight: 'bold',
  },
  contentContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
});

export default HorizontalTabs;
