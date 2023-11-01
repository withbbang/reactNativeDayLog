import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

/**
 * 정규식을 이용한 모든 줄 바꿈 문자 제거
 * @param {string} text
 * @returns {string}
 */
function truncate(text) {
  const replaced = text.replace(/\n/g, ' ');

  if (replaced.length <= 100) {
    return replaced;
  }

  return replaced.slice(0, 100).concat('...');
}

/**
 * 방금 전 / 3분 전 / 1시간 전 / 3일 전 / 날짜
 * 상위로 피드를 표기해 주는 date-fns를 이용한 변환 함수
 * @param {Date} date
 * @returns
 */
function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }

  if (diff < 60 * 60 * 24 * 3) {
    // addSuffix: 포매팅 문자열 뒤에 '전' 혹은 '후' 접미사를 붙이는 옵션
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }

  // PPP: 날짜, EEE: 요일, p: 시간
  return format(d, 'PPP EEE p', {locale: ko});
}

function FeedListItem({log}) {
  const {title, body, date} = log;

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default FeedListItem;
