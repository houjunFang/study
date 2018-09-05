package com.test;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

/**
 * JAVA多线程之--生产消费模式
 * 备注：多线程条件判断应使用while而非if
 * @author fang_houjun
 *
 */
public class MyQueue {

	private int capacity;
	private Queue<Integer> queue;

	public MyQueue(int capacity) {
		this.capacity = capacity;
		queue = new LinkedList<Integer>();
	}

	public synchronized void put(int number) {
		while (queue.size() >= capacity) {
			System.out.println(Thread.currentThread().getName() + ",put full,wait...");
			try {
				wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		queue.add(number);
		System.out.println(Thread.currentThread().getName() + ",add queue num:" + number + ",queue->" + queue);
		notifyAll();
	}

	public synchronized int get() {
		while (queue.isEmpty()) {
			System.out.println(Thread.currentThread().getName() + ",get empty,wait...");
			try {
				wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		int num = queue.poll();
		System.out.println(Thread.currentThread().getName() + ",get number:" + num + "queue->" + queue);
		notifyAll();
		return num;
	}

	public static void main(String[] args) {
		MyQueue myQueue = new MyQueue(10);
		Random rd = new Random();

		new Thread(new Runnable() {
			@Override
			public void run() {
				while (true) {
					myQueue.put(rd.nextInt(10));
					try {
						Thread.sleep(300);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}, "放数线程-01").start();
		
		new Thread(new Runnable() {
			@Override
			public void run() {
				while (true) {
					myQueue.put(rd.nextInt(10));
					try {
						Thread.sleep(300);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}, "放数线程-02").start();

		new Thread(new Runnable() {

			@Override
			public void run() {
				while (true) {
					myQueue.get();
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}

		}, "取数线程").start();

	}

}
