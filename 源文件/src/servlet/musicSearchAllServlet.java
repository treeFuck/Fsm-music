package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

import net.sf.json.JSONArray;  
//import net.sf.json.JSONObject;  

import Music.Music;
import dao.MusicDao;

public class musicSearchAllServlet extends HttpServlet {
private static final long serialVersionUID = -3009431503363456775L;
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		
		
		PrintWriter out = response.getWriter();
		String mName = request.getParameter("searchInput");// 获取查询输入
		MusicDao musicDao = new MusicDao();                //实例化歌曲
		List<Music> musicArr = musicDao.searchAll(mName);  //根据输入查询歌曲信息
		
		
		if(musicArr != null){
			System.out.print("有查询结果");
			
			//将List数据转化为json字符串
			JSONArray str = JSONArray.fromObject(musicArr);  
	        System.out.println("输出这个json字符串"+str);
	        out.print(str);
			
			
		}else {
			System.out.print("没有查询结果");
			out.print("error");
		}
		
		out.flush();
		out.close();

	}

}
