import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos"/>
      </View>

      <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
        style={styles.teacherList}
      >
        <TeacherItem />

      </ScrollView>
    </View>
  )
};

export default Favorites;