package dao;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectDB {
	//数据库连接
	private static String dbUrl="jdbc:mysql://localhost:3306/musics?useUnicode=true&characterEncoding=UTF-8";
	private static String dbUserName="root";
	private static String dbPassword="123456";
	private static String jdbcName="com.mysql.jdbc.Driver";
	
	public static Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName(jdbcName);
			//获取数据库连接
			System.out.println("【数据库加载成功】Success loading Mysql Driver!");  

			conn = DriverManager.getConnection(dbUrl,dbUserName,dbPassword);
			
			if(null != conn) {
				System.out.println("【数据库连接成功】Success connect Mysql server!");
				}  
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	//关闭数据库
	public static void closeConnection(Connection conn){
		// 判断conn是否为空
		if(conn != null){
			try {
				conn.close();	// 关闭数据库连接
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
