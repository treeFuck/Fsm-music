package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

import Music.Music;

public class MusicDao {
	    //获取歌曲信息
	    //mName;   歌曲名
	    //mSinger; 歌手
	    //mPlay;   播放量
	    //mSrc;    歌曲地址
	    //iSrc;    图片地址
		public Music search(String mName){
			Music music = null;
			// 获取数据库连接Connection对象
			Connection conn = ConnectDB.getConnection();
			// 根据用户名及密码查询用户信息
			String sql = "select * from musics where mName = ?";
			try {
				// 获取PreparedStatement对象
				PreparedStatement ps = conn.prepareStatement(sql);
				// 对SQL语句的占位符参数进行动态赋值
				ps.setString(1, mName);
				// 执行查询获取结果集
				ResultSet rs = ps.executeQuery();
				// 判断结果集是否有效
				if(rs.next()){
					// 实例化一个用户对象
					music = new Music();
					// 对用户对象属性赋值
					music.setmName(rs.getString("mName"));
					music.setmSinger(rs.getString("mSinger"));
					music.setmPlay(rs.getString("mPlay"));
					music.setmSrc(rs.getString("mSrc"));
					music.setiSrc(rs.getString("iSrc"));
				}
				// 释放此 ResultSet 对象的数据库和 JDBC 资源
				rs.close();
				// 释放此 PreparedStatement 对象的数据库和 JDBC 资源
				ps.close();
			} catch (Exception e) {
				e.printStackTrace();
			}finally{
				// 关闭数据库连接
				ConnectDB.closeConnection(conn);
			}
			return music;
		}

		public List<Music> searchAll(String mName){
			List<Music> musicArr = new ArrayList<Music>();
			
			// 获取数据库连接Connection对象
			Connection conn = ConnectDB.getConnection();
			// 根据用户名及密码查询用户信息
			String sql = "select * from musics where mName like ?";
			try {
				// 获取PreparedStatement对象
				PreparedStatement ps = conn.prepareStatement(sql);
				// 对SQL语句的占位符参数进行动态赋值
				ps.setString(1, "%"+mName+"%");
				// 执行查询获取结果集
				ResultSet rs = ps.executeQuery();
				// 判断结果集是否有效
				while(rs.next()){
					// 实例化一个用户对象
					 Music music = new Music();
					// 对用户对象属性赋值
					music.setmName(rs.getString("mName"));
					music.setmSinger(rs.getString("mSinger"));
					music.setmPlay(rs.getString("mPlay"));
					music.setmSrc(rs.getString("mSrc"));
					music.setiSrc(rs.getString("iSrc"));
					musicArr.add(music);
				}
				// 释放此 ResultSet 对象的数据库和 JDBC 资源
				rs.close();
				// 释放此 PreparedStatement 对象的数据库和 JDBC 资源
				ps.close();
			} catch (Exception e) {
				e.printStackTrace();
			}finally{
				// 关闭数据库连接
				ConnectDB.closeConnection(conn);
			}
			return musicArr;
		}

}
