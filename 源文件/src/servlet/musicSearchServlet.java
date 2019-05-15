package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Music.Music;
import dao.MusicDao;

public class musicSearchServlet extends HttpServlet {
	private static final long serialVersionUID = -3009431503363456775L;
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");


		PrintWriter out = response.getWriter();
		String mName = request.getParameter("musicName");// 获取歌曲名
		MusicDao musicDao = new MusicDao();              //实例化歌曲
		Music music = musicDao.search(mName);            //根据歌曲名查询歌曲信息
		
		
		if(music != null){
			System.out.print("《 "+mName+" 》 "+"这首歌时有的！！！！");
			
			String str = "{\"musicName\":\""+music.mName+"\",\"musicSinger\":\""+music.mSinger+"\",\"musicPlay\":\""+music.mPlay+"\",\"musicSrc\":\""+music.mSrc+"\",\"imgSrc\":\""+music.iSrc+"\"}";
			System.out.print(str);
			out.print(str);
			
		}else {
			System.out.print("《 "+mName+" 》 "+"这首歌时没有。。。。。");
			out.print("error");
		}
		
		out.flush();
		out.close();
	}
}
